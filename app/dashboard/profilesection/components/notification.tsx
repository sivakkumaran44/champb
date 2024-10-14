import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";

export default function NotificationContent() {
  return (
    <div className="p-6 max-w-8xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-900 mb-1">Notifications from us</h2>
      <p className="text-sm text-gray-500 mb-4">Receive the latest news, updates from us.</p>
      <div className="hidden md:grid grid-cols-[1fr,auto,auto] gap-x-16 gap-y-6">
        <div></div>
        <div className="text-sm font-medium text-gray-700">
          Email
          <div className="text-xs text-gray-500 font-normal">Loremipsum@lorem.com</div>
        </div>
        <div className="text-sm font-medium text-gray-700">
          Whatsapp/SMS
          <div className="text-xs text-gray-500 font-normal">98765-12345</div>
        </div>

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
          description="Special offers or discounts, Announcements of new test series or exam news"
          emailChecked={true}
          smsChecked={true}
          isGreen={true}
        />
      </div>
      <div className="md:hidden space-y-6">
        <MobileNotificationSection
          title="Email"
          subtitle="Loremipsum@lorem.com"
          notifications={[
            { title: "Transactional", checked: true },
            { title: "Support", checked: true },
            { title: "Promotional & Marketing", checked: true, isGreen: true }
          ]}
        />
        <MobileNotificationSection
          title="Whatsapp/SMS"
          subtitle="98765-12345"
          notifications={[
            { title: "Transactional", checked: true },
            { title: "Support", checked: true },
            { title: "Promotional & Marketing", checked: true, isGreen: true }
          ]}
        />
      </div>
    </div>
  );
}

interface NotificationRowProps {
  title: string;
  description: string;
  emailChecked: boolean;
  smsChecked: boolean;
  isGreen?: boolean;
}

function NotificationRow({ title, description, emailChecked, smsChecked,   }: NotificationRowProps) {
  const [emailToggle, setEmailToggle] = useState(emailChecked);
  const [smsToggle, setSmsToggle] = useState(smsChecked);

  return (
    <>
      <div>
        <h4 className="font-medium text-gray-800">{title}</h4>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
      <div className="flex justify-center">
        <Switch 
          checked={emailToggle}
          onCheckedChange={(value) => setEmailToggle(value)}
        />
      </div>
      <div className="flex justify-center">
        <Switch 
          checked={smsToggle}
          onCheckedChange={(value) => setSmsToggle(value)}
        />
      </div>
    </>
  );
}

interface MobileNotificationSectionProps {
  title: string;
  subtitle: string;
  notifications: { title: string; checked: boolean; isGreen?: boolean }[];
}

function MobileNotificationSection({ title, subtitle, notifications }: MobileNotificationSectionProps) {
  return (
    <div>
      <h3 className="text-sm font-medium text-gray-700 mb-1">{title}</h3>
      <p className="text-xs text-gray-500 mb-2">{subtitle}</p>
      <div className="space-y-2">
        {notifications.map((notification, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-sm text-gray-800">{notification.title}</span>
            <Switch 
              checked={notification.checked}
              onCheckedChange={() => { }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
