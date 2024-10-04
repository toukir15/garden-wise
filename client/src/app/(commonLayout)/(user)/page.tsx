import CreatePost from "@/src/components/user/CreatePost";
import ViewPost from "@/src/components/user/ViewPost";

export default function Home() {
  return (
    <section className="flex flex-col h-[calc(100vh-16px)] overflow-y-scroll  ">
      <CreatePost />
      <ViewPost />
    </section>
  );
}
