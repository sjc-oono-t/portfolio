import { WorkItemData } from "./interface";
import { GoGear, GoFileCode, GoLinkExternal } from "react-icons/go";
import { styled } from "styled-components";
import image01 from "images/image01.jpg";

const WorkItemBlock = styled.div`
  border: 1px solid #f0efee;
  border-radius: 12px;
  padding: 16px 24px;
  background: #FBF9FA;
  display: flex;
  gap: 16px;
  svg {
    margin-right: 4px;
  }
`;

const ImageBlock = styled.div`
  width: 200px;
  img {
    width: 100%;
  }
`;

const WorkItemHeader = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;

const Title = styled.span`
  margin-right: 24px;
  font-size: 24px;
`;

const WorkItemLink = styled.a`
  color: #404040;
`;

const WorkingProcess = styled.span`
  margin-right: 24px;
`;

const Discription = styled.div`
  margin-top: 12px;
`;

interface Props {
  workItem: WorkItemData;
  className?: string;
}

export const WorkItem: React.FC<Props> = (props) => {
  return (
    <WorkItemBlock className={props.className}>
      <ImageBlock>
        <img src={image01}></img>
      </ImageBlock>
      <div>
        <WorkItemHeader>
          <Title>
            {props.workItem.title}
          </Title>
          {
            props.workItem.url && <span>
              <WorkItemLink href={props.workItem.url} target="_blank"  rel="noreferrer">
                <GoLinkExternal style={{verticalAlign: "bottom"}} />
                {props.workItem.url}
              </WorkItemLink>
            </span>
          }
        </WorkItemHeader>
        <WorkingProcess>
          <GoGear />
          {props.workItem.workingProcess.join(' / ')}
        </WorkingProcess>
        <span>
          <GoFileCode />
          {props.workItem.technology.join(' / ')}
        </span>
        <Discription>
          {props.workItem.description}
        </Discription>
      </div>
    </WorkItemBlock>
  );
}
