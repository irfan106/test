import { PiCircleHalfFill } from "react-icons/pi";
import { FaCircleCheck } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa6";
import { LuCircleDashed } from "react-icons/lu";
import { BsFillExclamationSquareFill } from "react-icons/bs";
import { BiSignal3, BiSignal4, BiSignal5 } from "react-icons/bi";
import { AiOutlineDash } from "react-icons/ai";
import { MdCancel } from "react-icons/md";

const status = ["backlog", "todo", "in progress", "done", "canceled"];
const priority = ["No priority", "Low", "Medium", "High", "Urgent"];
const colors = ["#93B5C6", "#F0CF65", "#D7816A", "#BD4F6C"];

const statusMap = {
    "todo" : <FaRegCircle />,
    "in progress": <PiCircleHalfFill color="#f1ca4b"/>,
    "backlog" : <LuCircleDashed />,
    "done" : <FaCircleCheck color="#3ba042"/>,
    "canceled" : <MdCancel />
  }
  const priorityMap = {
    "no priority" : <AiOutlineDash />,
    "urgent" : <BsFillExclamationSquareFill color="#fc7840"/>,
    "high" : <BiSignal5 />,
    "medium" : <BiSignal4 />,
    "low" :  <BiSignal3 />
  }

  const priorityArr = [<AiOutlineDash />,
  <BsFillExclamationSquareFill color="#fc7840"/>,
  <BiSignal5 />,
  <BiSignal4 />,
   <BiSignal3 />]

export const utility = {
    status,
    priority,
    colors,
    statusMap,
    priorityMap,
    priorityArr
}


