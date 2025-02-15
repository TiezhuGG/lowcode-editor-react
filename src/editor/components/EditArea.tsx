import React, { MouseEventHandler, useState } from "react";
import { Component, useComponentsStore } from "../stores/components";
import { useComponentConfigStore } from "../stores/component-config";
import HoverMask from "./HoverMask/idnex";

export function EditArea() {
  const { components } = useComponentsStore();
  const { componentConfig } = useComponentConfigStore();
  // console.log("components", components);
  // console.log("componentConfig", componentConfig);

  const [hoverComponentId, setHoverComponentId] = useState<number>();

  const handleMouseOver: MouseEventHandler = (e) => {
    const target = (e.target as HTMLElement).closest("[data-component-id]");
    if (target) {
      const componentId = target.getAttribute("data-component-id");
      if (componentId) {
        setHoverComponentId(Number(componentId));
      }
    }
  };

  const handleMouseLeave: MouseEventHandler = () => {
    setHoverComponentId(undefined);
  };

  function renderComponents(components: Component[]): React.ReactNode {
    return components.map((component: Component) => {
      const config = componentConfig?.[component.name];
      // console.log("config", config);
      if (!config?.component) {
        return null;
      }

      return React.createElement(
        config.component,
        {
          key: component.id,
          id: component.id,
          name: component.name,
          ...config.defaultProps,
          ...component.props,
        },
        renderComponents(component.children || [])
      );
    });
  }

  return (
    <div
      className="h-[100%] edit-area"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {renderComponents(components)}
      {hoverComponentId && (
        <HoverMask
          portalWrapperClassName="portal-wrapper"
          containerClassName="edit-area"
          componentId={hoverComponentId}
        />
      )}
      <div className="portal-wrapper"></div>
    </div>
  );
}
