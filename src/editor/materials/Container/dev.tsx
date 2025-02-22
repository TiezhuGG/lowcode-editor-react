import { CommonComponentProps } from "../../interface";
import { useMaterialDrop } from "../../hooks/useMaterilDrop";

const Container = ({ id, children, styles }: CommonComponentProps) => {
  const { canDrop, drop } = useMaterialDrop(["Button", "Container"], id);

  return (
    <div
      data-component-id={id}
      ref={drop}
      className={`min-h-[100px] p-[20px] ${
        canDrop ? "border-[2px] border-[blue]" : "border-[1px] border-[#000]"
      }`}
      style={styles}
    >
      {children}
    </div>
  );
};

export default Container;
