export const LinkIcon = ({
  width,
  height,
  color,
}: {
  width: number;
  height: number;
  color: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M6.4 10.6C5.8 9.9 5.5 9.1 5.5 8.3C5.5 7.4 5.8 6.6 6.5 6C7.7 4.8 9.9 4.8 11.1 6L13.3 8.2C13.7 8.6 14.3 8.6 14.7 8.2C15.1 7.8 15.1 7.2 14.7 6.8L12.5 4.5C11.5 3.6 10.1 3 8.7 3C7.3 3 6 3.6 5 4.5C4 5.5 3.5 6.9 3.5 8.3C3.5 9.7 4 11 5 12L7.2 14.2C7.4 14.4 7.7 14.5 7.9 14.5C8.1 14.5 8.4 14.4 8.6 14.2C9 13.8 9 13.2 8.6 12.8L6.4 10.6Z"
        fill={color}
      ></path>
      <path
        d="M20 12L17.8 9.8C17.4 9.4 16.8 9.4 16.4 9.8C16 10.2 16 10.8 16.4 11.2L18.6 13.5C19.2 14.1 19.6 14.9 19.6 15.8C19.6 16.7 19.3 17.5 18.6 18.1C17.3 19.4 15.3 19.4 14 18.1L11.8 15.9C11.4 15.5 10.8 15.5 10.4 15.9C10 16.3 10 16.9 10.4 17.3L12.6 19.5C13.6 20.5 15 21 16.3 21C17.6 21 19 20.5 20 19.5C21 18.5 21.5 17.2 21.5 15.8C21.5 14.3 21 13 20 12Z"
        fill={color}
      ></path>
      <path
        d="M15.2 14.7C15 14.9 14.8 15 14.5 15C14.2 15 14 14.9 13.8 14.7L9.8 10.7C9.4 10.3 9.4 9.7 9.8 9.3C10.2 8.9 10.8 8.9 11.2 9.3L15.2 13.3C15.6 13.7 15.6 14.3 15.2 14.7Z"
        fill={color}
      ></path>
    </svg>
  );
};