import { WorkItemData } from "./interface";
import { GoGear, GoFileCode } from "react-icons/go";

interface Props {
  readonly workItem: WorkItemData;
}

export const WorkItem: React.FC<Props> = (props) => {
  return (
    <div>
      {props.workItem.title}
      {props.workItem.description}
      <GoGear />
      {props.workItem.workingProcess}
      <GoFileCode />
      {props.workItem.technology}
    </div>
  );
}
