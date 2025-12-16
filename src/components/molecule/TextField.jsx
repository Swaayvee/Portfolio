import Label from "../atom/Label";
import Input from "../atom/Input";

const TextField = ({name, type}) => {
    return (
      <div className="flex flex-row gap-2 items-center">
         <Label name={name}/>
         {type ? <Input type={type}/> : <textarea className="bg-neutral-500 border-white border rounded-md p-1"></textarea>}
      </div>
    )
}

export default TextField