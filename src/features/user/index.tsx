import { useUserQuery } from "./userApi";

export default function UserIndex() {
  const { data, isSuccess } = useUserQuery();
  if (isSuccess && data) {
    console.log(data);
  }

  return <div>index</div>;
}
