import { CheckIcon } from "@/components/icons";
import { productionStages } from "@/lib/data";

export function OrderSteps({
  stageIndex,
  tone = "light",
}: {
  stageIndex: number;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <ol className="grid gap-3 lg:grid-cols-7 lg:gap-0">
      {productionStages.map((stage, i) => {
        const done = i < stageIndex;
        const current = i === stageIndex;
        return (
          <li key={stage} className="relative flex items-start gap-3 lg:block lg:px-1">
            {i < productionStages.length - 1 ? (
              <span
                className={`absolute left-[15px] top-8 h-[calc(100%-0.5rem)] w-0.5 lg:left-[calc(50%+12px)] lg:top-[11px] lg:h-0.5 lg:w-[calc(100%-4px)] ${
                  done ? "bg-copper" : dark ? "bg-line-dark" : "bg-line"
                }`}
                aria-hidden
              />
            ) : null}
            <span
              className={`relative z-10 grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 text-[11px] lg:mx-auto ${
                done
                  ? "border-copper bg-copper text-white"
                  : current
                    ? dark
                      ? "border-[#fdba74] bg-ink text-[#fdba74]"
                      : "border-copper bg-paper text-copper"
                    : dark
                      ? "border-line-dark bg-ink text-mute-light"
                      : "border-line bg-paper text-mute"
              }`}
            >
              {done ? <CheckIcon className="h-3.5 w-3.5" /> : i + 1}
            </span>
            <div className="lg:mt-3 lg:text-center">
              <p
                className={`text-xs font-semibold leading-4 lg:text-[11px] ${
                  done || current
                    ? dark
                      ? "text-paper"
                      : "text-ink"
                    : dark
                      ? "text-mute-light"
                      : "text-mute"
                }`}
              >
                {stage}
              </p>
              {current ? (
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-copper lg:text-[#fdba74]">
                  In progress
                </p>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export function StageBadge({
  stageIndex,
  tone = "light",
}: {
  stageIndex: number;
  tone?: "light" | "dark";
}) {
  const stage = productionStages[stageIndex] ?? productionStages[0];
  const dark = tone === "dark";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
        dark ? "bg-[#fdba74]/15 text-[#fdba74]" : "bg-copper/10 text-copper"
      }`}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${
            dark ? "bg-[#fdba74]" : "bg-copper"
          }`}
        />
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${
            dark ? "bg-[#fdba74]" : "bg-copper"
          }`}
        />
      </span>
      {stage}
    </span>
  );
}
