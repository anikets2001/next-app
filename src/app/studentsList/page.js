import Link from "next/link";
import Script from "next/script";

export function generateMetadata() {
  return {
    title: "Students page",
    description: "students page description",
  };
}

const StudentsList = () => {
  return (
    <div>
      <Script src="/location.js" />
      <ul>
        <li>
          <Link href={"/studentsList/aniket"}>Aniket</Link>
        </li>
        <li>
          <Link href={"/studentsList/nikhil"}>Nikhil</Link>
        </li>
        <li>
          <Link href={"/studentsList/aryan"}>Aryan</Link>
        </li>
        <li>
          <Link href={"/studentsList/anik"}>Anik</Link>
        </li>
      </ul>
    </div>
  );
};

export default StudentsList;
