import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

 const NotificationCard=() =>{
  return (
    <Card className="border border-[#F1F5F9] bg-[#F8FAFC]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Transactional Notifications</Label>
            <p className="text-sm text-muted-foreground">
              User&apos;s account activity or actions taken on the platform
            </p>
          </div>
          <div className="relative inline-block w-11 h-5">
            <input checked id="switch-component" type="checkbox" className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-emerald-600 cursor-pointer transition-colors duration-300" />
            <label htmlFor="switch-component" className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-emerald-800 cursor-pointer"></label>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Support Notifications</Label>
            <p className="text-sm text-muted-foreground">
              Related to customer service interactions or platform updates
            </p>
          </div>
          <div className="relative inline-block w-11 h-5">
            <input checked id="switch-component-2" type="checkbox" className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-emerald-600 cursor-pointer transition-colors duration-300" />
            <label htmlFor="switch-component-2" className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-emerald-800 cursor-pointer"></label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
export default NotificationCard