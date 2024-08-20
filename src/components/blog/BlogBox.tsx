import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./blog.css?inline";
import { Image } from "@unpic/qwik";

interface BlogProps {
  title: string;
  category: string;
  description: string;
  image: string;
  author: string;
  date: string;
  read_time: string;
  auth_image: string;
}

const BlogBox = component$((props: BlogProps) => {
  useStyles$(styles);
  return (
    <div class="blog--box">
      <div class="image-wrapper">
        <Image src={props.image} alt={props.title} width="703" height="428" />
      </div>
      <div class="space-y-4 2xl:space-y-7">
        <div class="block">
          <small>{props.category}</small>
          <h3 class="blog--title">{props.title}</h3>
        </div>
        <p class="blog--description">{props.description}</p>
        <div class="blog--author">
          <div class="flex items-center gap-3">
            <div class="author-image-wrapper">
              <Image src={props.auth_image} alt={props.author} />
            </div>
            <div>
              <h5 class="author-name">{props.author}</h5>
              <p class="blog-date">
                {props.date} - {props.read_time}
              </p>
            </div>
          </div>
          <div class="flex items-stretch gap-2.5">
            <button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z"
                  stroke="#4C4C4C"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 21V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21L13.0815 17.1953C12.4227 16.7717 11.5773 16.7717 10.9185 17.1953L5 21Z"
                  stroke="#4C4C4C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default BlogBox;
