import { useMaterialDrop } from "../../hooks/useMaterialDrop";
import { CommonComponentProps } from "../../interface";

const Modal = ({ id, children, title, styles }: CommonComponentProps) => {
  const { canDrop, drop } = useMaterialDrop(
    ["Button", "Container", "Table"],
    id
  );

  return (
    <div
      data-component-id={id}
      ref={drop}
      style={styles}
      className={`min-h-[100px] p-[20px] ${
        canDrop ? "border-[2px] border-[blue]" : "border-[1px] border-[#000]"
      }`}
    >
      <h4>{title}</h4>
      <div>{children}</div>
    </div>
  );
};

export default Modal;
