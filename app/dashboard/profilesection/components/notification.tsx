import React from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function NotificationContent() {
  return (
    <div className="pl-6">
      <h3 className="text-lg font-semibold text-slate-700 mb-2">Notifications from us</h3>
      <p className="text-sm text-muted-foreground mb-6">Receive the latest news, updates from us.</p>
      <div className="grid grid-cols-3 gap-4 mb-2">
        <div></div>
        <div className="text-sm font-medium text-slate-700 text-center mr-24">Email</div>
        <div className="text-sm font-medium text-slate-700 text-center mr-8">Whatsapp/SMS</div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-2">
        <div></div>
        <div className="text-xs text-muted-foreground text-center">Loremipsum@lorem.com</div>
        <div className="text-xs text-muted-foreground text-center mr-14">98765-12345</div>
      </div>
      <div className="space-y-4">
        <NotificationRow 
          title="Transactional Notifications"
          description="User's account activity or actions taken on the platform"
          emailChecked={true}
          smsChecked={true}
        />
        <NotificationRow 
          title="Support Notifications"
          description="Related to customer service interactions or platform updates"
          emailChecked={true}
          smsChecked={true}
        />
        <NotificationRow 
          title="Promotional & Marketing"
          description="Special offers or discounts,Announcements of new test series or exam news"
          emailChecked={true}
          smsChecked={true}
        />
      </div>
      <div className="flex justify-end space-x-2 mt-4">
        <Button variant="outline" className="text-emerald-700 border border-emerald-700">Cancel</Button>
        <Button className="bg-emerald-700 text-white hover:bg-emerald-700">Save Changes</Button>
      </div>
    </div>
  );
}
interface NotificationRowProps {
    title: string;
    description: string;
    emailChecked: boolean;
    smsChecked: boolean;
  }
  
  function NotificationRow({ title, description, emailChecked, smsChecked }: NotificationRowProps) {
    return (
      <div className="grid grid-cols-3 gap-4 items-center">
        <div>
          <h4 className="font-medium text-slate-700">{title}</h4>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
        <div className="flex justify-center">
          <Switch defaultChecked={emailChecked} />
        </div>
        <div className="flex justify-center">
          <Switch defaultChecked={smsChecked} />
        </div>
      </div>
    );
  }