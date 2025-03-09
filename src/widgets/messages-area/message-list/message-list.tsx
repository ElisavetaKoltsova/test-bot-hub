import { JSX } from "react";
import MessageLeftItem from "../message-item/message-left-item";
import MessageRightItem from "../message-item/message-right-item";

export default function MessagesList(): JSX.Element {
  return (
    <div className="message-list-container">
      <MessageRightItem message={"Hello!"} time={"22:51"} />
      <MessageLeftItem message={"Привет! Чем я могу помочь?"} time={"11:29"} />
      <MessageRightItem message={"KJDBSKJBSFSLSFSLkdsaldjaskdfsal fdasf fslfnsfdklsdfn lfsdflsdfsd;kfjsd;fsfksdfbs fljsdfbslfsfkslfksfff!"} time={"11:14"} />
      <MessageLeftItem message={"Не понял вас. Повторите свой вопрос"} time={"11:29"} />
      <MessageRightItem message={"Hello!"} time={"22:51"} />
      <MessageLeftItem message={"Привет! Чем я могу помочь?"} time={"11:29"} />
      <MessageRightItem message={"KJDBSKJBSFSLSFSLkdsaldjaskdfsal fdasf fslfnsfdklsdfn lfsdflsdfsd;kfjsd;fsfksdfbs fljsdfbslfsfkslfksfff!"} time={"11:14"} />
      <MessageLeftItem message={"Не понял вас. Повторите свой вопрос"} time={"11:29"} />
      <MessageRightItem message={"Hello!"} time={"22:51"} />
      <MessageLeftItem message={"Привет! Чем я могу помочь?"} time={"11:29"} />
      <MessageRightItem message={"KJDBSKJBSFSLSFSLkdsaldjaskdfsal fdasf fslfnsfdklsdfn lfsdflsdfsd;kfjsd;fsfksdfbs fljsdfbslfsfkslfksfff!"} time={"11:14"} />
      <MessageLeftItem message={"Не понял вас. Повторите свой вопрос"} time={"11:29"} />
      <MessageRightItem message={"Hello!"} time={"22:51"} />
      <MessageLeftItem message={"Привет! Чем я могу помочь?"} time={"11:29"} />
      <MessageRightItem message={"KJDBSKJBSFSLSFSLkdsaldjaskdfsal fdasf fslfnsfdklsdfn lfsdflsdfsd;kfjsd;fsfksdfbs fljsdfbslfsfkslfksfff!"} time={"11:14"} />
      <MessageLeftItem message={"Не понял вас. Повторите свой вопрос"} time={"11:29"} />
    </div>
  );
}
