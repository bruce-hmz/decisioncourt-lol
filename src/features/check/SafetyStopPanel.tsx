import { useState } from "react";
import {
  L2_BODY,
  L2_TITLE,
  L3_BODY,
  L3_CLOSING,
  L3_RESOURCES,
  L3_TITLE,
  REFUSE_COPY,
  SAFETY_UNAVAILABLE_BODY,
  UNSUPPORTED_LANGUAGE_BODY,
  type RefusalReason,
} from "@/shared/content/safety-copy";
import type { SafetyRoute } from "@/server/safety/types";

interface Props {
  route: SafetyRoute;
  refusalReason?: string;
}

export function SafetyStopPanel({ route, refusalReason }: Props) {
  if (route === "L3") return <L3Panel />;
  if (route === "L2") return <L2Panel />;
  if (route === "REFUSE") return <RefusePanel reason={(refusalReason ?? "harmful_use") as RefusalReason} />;
  if (route === "UNSUPPORTED_LANGUAGE") return <UnsupportedPanel />;
  return <UnavailablePanel />;
}

function L3Panel() {
  const [region, setRegion] = useState<string>(L3_RESOURCES[0].region);
  const resource = L3_RESOURCES.find((r) => r.region === region) ?? L3_RESOURCES[0];
  return (
    <section aria-labelledby="safety-stop-title" className="card p-6 md:p-10 fade-swap">
      <div className="border-t-4 border-danger-fg -mt-6 -mx-6 mb-6 md:-mt-10 md:-mx-10 rounded-t-[var(--radius-lg)]" aria-hidden="true" />
      <p className="eyebrow" role="alert">Support first</p>
      <h2 id="safety-stop-title" className="text-heading-2 mt-2">
        {L3_TITLE}
      </h2>
      <div className="mt-4 space-y-3">
        {L3_BODY.map((line) => (
          <p key={line} className="text-body-lg">{line}</p>
        ))}
      </div>
      <fieldset className="mt-6">
        <legend className="text-label">Choose your region</legend>
        <div className="grid gap-2 mt-3 sm:grid-cols-2">
          {L3_RESOURCES.map((r) => (
            <label key={r.region} className="radio-row">
              <input
                type="radio"
                name="crisis-region"
                value={r.region}
                checked={region === r.region}
                onChange={() => setRegion(r.region)}
              />
              <span>{r.region}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="mt-4 p-4 rounded-[var(--radius-md)] bg-danger-bg">
        <p className="text-body-lg font-semibold" style={{ color: "var(--color-danger-fg)" }}>
          {resource.region}: {resource.label}
        </p>
        <p className="mt-2">
          {resource.tel ? (
            <a href={"tel:" + resource.tel} className="font-semibold">{resource.label}</a>
          ) : null}{" "}
          <a href={resource.href} rel="noopener noreferrer">
            {resource.name} (opens official resource)
          </a>
        </p>
      </div>
      <p className="mt-4 text-body-lg">{L3_CLOSING}</p>
    </section>
  );
}

function L2Panel() {
  return (
    <section aria-labelledby="safety-stop-title" className="card p-6 md:p-10 fade-swap">
      <p className="eyebrow">Stopped before analysis</p>
      <h2 id="safety-stop-title" className="text-heading-2 mt-2">{L2_TITLE}</h2>
      <div className="mt-4 space-y-3">
        {L2_BODY.map((line, i) => (
          <p key={i} className="text-body-lg">
            {i === 0 ? (
              <>
                {line.split("Find A Helpline")[0]}
                <a href="https://findahelpline.com/" rel="noopener noreferrer">Find A Helpline</a>.
              </>
            ) : (
              line
            )}
          </p>
        ))}
      </div>
    </section>
  );
}

function RefusePanel({ reason }: { reason: RefusalReason }) {
  const titles: Record<RefusalReason, string> = {
    professional_advice: "I can't help with professional decisions in a message check.",
    minors: "This tool cannot analyze messages involving minors.",
    harmful_use: "I can't help optimize this message.",
  };
  return (
    <section aria-labelledby="safety-stop-title" className="card p-6 md:p-10 fade-swap">
      <p className="eyebrow">Outside the boundary</p>
      <h2 id="safety-stop-title" className="text-heading-2 mt-2">{titles[reason]}</h2>
      <p className="mt-4 text-body-lg">{REFUSE_COPY[reason]}</p>
    </section>
  );
}

function UnsupportedPanel() {
  return (
    <section aria-labelledby="safety-stop-title" className="card p-6 md:p-10 fade-swap">
      <p className="eyebrow">Language limit</p>
      <h2 id="safety-stop-title" className="text-heading-2 mt-2">This version reads English only.</h2>
      <p className="mt-4 text-body-lg">
        {UNSUPPORTED_LANGUAGE_BODY.split("Find A Helpline")[0]}
        <a href="https://findahelpline.com/" rel="noopener noreferrer">Find A Helpline</a>.
      </p>
    </section>
  );
}

function UnavailablePanel() {
  return (
    <section aria-labelledby="safety-stop-title" className="card p-6 md:p-10 fade-swap">
      <p className="eyebrow">Check unavailable</p>
      <h2 id="safety-stop-title" className="text-heading-2 mt-2">We can't safely complete this check right now.</h2>
      <p className="mt-4 text-body-lg">{SAFETY_UNAVAILABLE_BODY}</p>
    </section>
  );
}
