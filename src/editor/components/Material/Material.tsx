import { useMemo } from "react";
import { useComponentConfigStore } from "../../stores/component-config";
import { MaterialItem } from "./MaterialItem";

export function Material() {
  const { componentConfig } = useComponentConfigStore();
  const components = useMemo(() => {
    return Object.values(componentConfig);
  }, [componentConfig]);

  return (
    <div>
      {components.map((item, index) => (
        <MaterialItem name={item.name} key={item.name + index}></MaterialItem>
      ))}
    </div>
  );
}
