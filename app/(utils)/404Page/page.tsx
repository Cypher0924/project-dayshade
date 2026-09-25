import { StatusPage } from "@/components/shared/status-page";

export default function NotFoundPage() {
  return (
    <StatusPage
      code="404"
      headline="Oops! There's nothing here!"
      body="Sorry, the page you're looking for is nowhere to be seen!"
    />
  );
}
