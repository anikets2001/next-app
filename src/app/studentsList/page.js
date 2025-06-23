import Link from "next/link";

export function generateMetadata(){
  return {
    title: 'Students page',
    description: 'students page description'
  }
}

const StudentsList = () => {
  return (
    <div>
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