import { useRouter } from "next/router";
import Button from "@material-ui/core/Button";

function ButtonLink({ children, href, as, ...props }) {
  const router = useRouter();

  const handleClick = e => {
    e.preventDefault();
    router.push(href, as);
  };

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  );
}

export default ButtonLink;
