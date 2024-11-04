import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button,  } from "@/components/ui/button"
import { Input } from "@/components/ui/input";

const MobileNumberCard=() =>{
  return (
    <Card className="border border-[#F1F5F9] bg-[#F8FAFC]">
      <CardHeader>
        <CardTitle>Mobile Number</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input defaultValue="9876512345" className="max-w-md border border-slate-300" disabled />
        <div className="flex items-center justify-between">
          <Button variant="link" className="text-gray-500 p-0">
            Change Number
          </Button>
          <Button variant="outline" className="text-emerald-600 border-emerald-600">
            Contact Support
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
export default MobileNumberCard