import { Allotment } from "allotment";
import "allotment/dist/style.css";
import { Header } from "./components/Header";
// import { Material } from "./components/Material/Material";
import { EditArea } from "./components/EditArea";
import { Setting } from "./components/Setting";
import { MaterialWrapper } from "./components/MaterialWrapper";
import { Preview } from "./components/Preview";
import { useComponentsStore } from "./stores/components";

export default function LowcodeEditor() {
  const { mode } = useComponentsStore();

  return (
    <div className="h-[100vh] flex flex-col">
      <div className="h-[60px] flex items-center border-b-[1px] border-[#100]">
        <Header />
      </div>

      {mode === "edit" ? (
        <Allotment>
          <Allotment.Pane preferredSize={240} maxSize={300} minSize={200}>
            {/* <Material /> */}
            <MaterialWrapper />
          </Allotment.Pane>
          <Allotment.Pane>
            <EditArea />
          </Allotment.Pane>
          <Allotment.Pane preferredSize={300} maxSize={500} minSize={300}>
            <Setting />
          </Allotment.Pane>
        </Allotment>
      ) : (
        <Preview />
      )}
    </div>
  );
}
