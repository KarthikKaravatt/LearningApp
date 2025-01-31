import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/profile/")({
  component: Profile,
});

function Profile() {
  return (
    <>
      <div className="flex justify-center">
        {
          //TODO: Remove placeholder
        }
        <div className="rounded-full overflow-hidden mt-10">
          <img
            className="size-50"
            alt="profile"
            src="https://i.pinimg.com/736x/a3/31/a8/a331a8d0a8ff50827c6cb3437f336a30.jpg"
          />
        </div>
      </div>
      <PersonalInformation />
    </>
  );
}

function PersonalInformation() {
  return (
    <>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">John Doe</span>
      </div>
    </>
  );
}
