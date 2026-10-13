import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="fabric-linen">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-28 text-center">
        <p className="font-display text-7xl tracking-tight text-copper">404</p>
        <h1 className="font-display mt-4 text-3xl tracking-tight text-ink sm:text-4xl">
          This page slipped a stitch.
        </h1>
        <p className="mt-4 max-w-md text-base leading-7 text-mute">
          The page you were looking for doesn&apos;t exist or has moved. Head back to the floor
          plan and try another route.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/products" variant="outline">
            Browse products
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
