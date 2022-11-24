import Image from "next/image";
import Link from "next/link";


export default function ItemCard(props) {
  return (
    <div class="p-4 md:w-1/4 sm:mb-0 mb-6">
      <Link
        href={{
          pathname: "/detail",
          query: {
            data: JSON.stringify(props),
          },
        }}
      >
        <div class="rounded-lg h-64 overflow-hidden">
          <Image
            alt="content"
            class="object-cover object-center h-full w-full"
            width="500"
            height="500"
            src={props.data.img}
          />
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
          {props.data.Categories}
        </h2>
      </Link>
    </div>
  );
}
