import {VscBug, VscGlobe} from 'react-icons/vsc'


export const Posts = () => {

  return (
    <button
      onClick={async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        )
          .then((response) => response.json())
          .then((json) => console.log(json));
      }}
    >
      <VscGlobe />
      Traer datos
    </button>
  );
};
