import { useState, ChangeEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface NameCardProps {
  defaultName: string;
  onUpdate: (name: string) => void;
}

const NameCard =({ defaultName, onUpdate }: NameCardProps) =>{
  const [name, setName] = useState(defaultName);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    const regex = /^[A-Za-z\s]*$/;
    if (regex.test(newName) || newName === "") {
      setName(newName);
      setIsButtonDisabled(newName.length < 4 || newName === defaultName);
    }
  };

  const handleUpdate = () => {
    onUpdate(name);
    setIsButtonDisabled(true);
  };

  return (
    <Card className="border border-[#F1F5F9] bg-[#F8FAFC]">
      <CardHeader>
        <CardTitle>Name</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input 
          value={name} 
          onChange={handleNameChange} 
          className="max-w-md border border-slate-300" 
        />
        <Button 
          onClick={handleUpdate} 
          disabled={isButtonDisabled} 
          className={`bg-emerald-500 hover:bg-emerald-600 ${isButtonDisabled ? "opacity-50" : ""}`}
        >
          Update Changes
        </Button>
      </CardContent>
    </Card>
  );
}
export default NameCard