import { WorkItemData } from "./interface";
import { GoGear, GoFileCode, GoLinkExternal } from "react-icons/go";
import { styled } from "styled-components"

const WorkItemBlock = styled.div`
  border: 1px solid black;
  padding: 16px 24px;
  svg {
    margin-right: 4px;
  }
`;

const WorkItemHeader = styled.div`
`;

const Title = styled.span`
  margin-right: 24px;
`;

const WorkingProcess = styled.span`
  margin-right: 24px;
`;

interface Props {
  readonly workItem: WorkItemData;
}

export const WorkItem: React.FC<Props> = (props) => {
  return (
    <WorkItemBlock>
      <WorkItemHeader>
        <Title>
          {props.workItem.title}
        </Title>
        {
          props.workItem.url && <span>
            <GoLinkExternal />
            <a href={props.workItem.url} target="_blank"  rel="noreferrer">
              {props.workItem.url}
            </a>
          </span>
        }
      </WorkItemHeader>
      <WorkingProcess>
        <GoGear />
        {props.workItem.workingProcess}
      </WorkingProcess>
      <span>
        <GoFileCode />
        {props.workItem.technology}
      </span>
      <div>
        {props.workItem.description}
      </div>
    </WorkItemBlock>
  );
}
