import { CustomButton } from "shared/ui/custom-button/view/CustomButton";
import { CustomInput } from "shared/ui/custom-input/view/CustomInput";
import { AccordionBlock } from "widgets/accordion-block";

function App() {
  return (
    <div>
      <CustomButton variant="primary">Hello</CustomButton>
      <CustomButton variant="secondary">Hello</CustomButton>
      <CustomInput type="password" variant={"secondary"}/>
      <CustomInput type="text" variant={"primary"}/>
      <CustomInput type="email" variant={"primary"}/>
      <CustomInput type="number" variant={"secondary"}/>
      <AccordionBlock />
    </div>
  );
}

export default App;
