import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../../shadcn/components/ui/Dialog";
import { Button } from "../../../shadcn/components/ui/Button";
import { Card } from "../../../shadcn/components/ui/Card";

export function IndividualInformationModal({ isOpen, onClose, userData }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1494_2976)">
                <path
                  d="M25.348 22.618L20.308 25.474C20.056 25.642 19.678 25.642 19.426 25.474L14.428 22.618C14.218 22.492 14.218 22.24 14.428 22.156L15.604 21.484C15.688 21.442 15.772 21.442 15.856 21.484L18.922 23.206C19.216 23.374 19.552 23.458 19.888 23.458C20.224 23.458 20.56 23.374 20.854 23.206L23.92 21.484C24.004 21.442 24.088 21.442 24.172 21.484L25.348 22.156C25.558 22.24 25.558 22.492 25.348 22.618ZM25.348 19.384L20.308 22.24C20.056 22.408 19.678 22.408 19.426 22.24L14.428 19.384C14.218 19.258 14.218 19.006 14.428 18.922L15.604 18.25C15.688 18.208 15.772 18.208 15.856 18.25L18.922 19.972C19.216 20.14 19.552 20.224 19.888 20.224C20.224 20.224 20.56 20.14 20.854 19.972L23.92 18.25C24.004 18.208 24.088 18.208 24.172 18.25L25.348 18.922C25.558 19.006 25.558 19.258 25.348 19.384ZM19.468 19.048L14.428 16.192C14.218 16.066 14.218 15.814 14.428 15.73L19.468 12.874C19.72 12.706 20.098 12.706 20.35 12.874L25.39 15.73C25.6 15.856 25.6 16.108 25.39 16.192L20.35 19.048C20.098 19.174 19.72 19.174 19.468 19.048Z"
                  fill="#424856"
                />
                <path
                  d="M13.7979 17.4104C14.0079 17.2844 14.0079 17.0324 13.7979 16.9484L12.6219 16.2764H12.5799V15.7304C12.5799 15.7304 12.5799 15.0164 13.2099 14.6384C13.3779 14.5544 13.7139 14.3864 14.0919 14.1764C13.9239 14.0924 13.7559 14.0084 13.5879 13.9664C12.8319 13.5884 11.7399 13.2104 11.4039 12.2444C11.1939 11.7404 11.3199 11.1944 11.5719 10.7324C12.0339 10.2704 12.4539 9.85039 12.8319 9.26239C12.9159 9.09439 12.9999 9.01039 13.0839 8.84239C14.1339 7.33039 14.2599 5.27239 13.6719 3.55039C13.0419 1.70239 11.4039 0.442391 9.38786 0.400391H9.09386C7.07786 0.442391 5.39786 1.70239 4.80986 3.55039C4.17986 5.31439 4.34786 7.33039 5.39786 8.84239C5.43986 9.01039 5.56586 9.09439 5.64986 9.26239C6.02786 9.85039 6.48986 10.2284 6.90986 10.7324C7.11986 11.1944 7.20386 11.6984 7.07786 12.2444C6.78386 13.1684 5.69186 13.5884 4.89386 13.9664C3.12986 14.7224 0.945858 15.8144 0.609858 17.9564C0.231858 19.7204 1.44986 21.4844 3.29786 21.4844H12.5799L13.7979 20.6864C14.0079 20.5604 14.0079 20.3084 13.7979 20.2244L12.6219 19.5524H12.5799V18.2084L13.7979 17.4104Z"
                  fill="#424856"
                />
              </g>
              <defs>
                <clipPath id="clip0_1494_2976">
                  <rect width="26" height="26" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Individual Information
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-1">
          <Card className="p-4 space-y-4">
            <div className="grid grid-cols-2 gap-y-3">
              <div className="text-sm text-gray-600">First Name</div>
              <div className="text-sm text-right">{userData.firstName}</div>

              <div className="text-sm text-gray-600">Last Name</div>
              <div className="text-sm text-right">{userData.lastName}</div>

              <div className="text-sm text-gray-600">Mobile Number</div>
              <div className="text-sm text-right">{userData.mobileNumber}</div>

              <div className="text-sm text-gray-600">Address</div>
              <div className="text-sm text-right">{userData.address}</div>

              <div className="text-sm text-gray-600">City</div>
              <div className="text-sm text-right">{userData.city}</div>

              <div className="text-sm text-gray-600">State</div>
              <div className="text-sm text-right">{userData.state}</div>
            </div>
          </Card>

          <Card className="p-4 space-y-4">
            <div className="grid grid-cols-2 gap-y-3">
              <div className="text-sm text-gray-600">ZIP</div>
              <div className="text-sm text-right">{userData.zip}</div>

              <div className="text-sm text-gray-600">Email</div>
              <div className="text-sm text-right">{userData.email}</div>

              <div className="text-sm text-gray-600">Education</div>
              <div className="text-sm text-right">{userData.education}</div>

              <div className="text-sm text-gray-600">Country of Birth</div>
              <div className="text-sm text-right">
                {userData.countryOfBirth}
              </div>

              <div className="text-sm text-gray-600">Birth Date</div>
              <div className="text-sm text-right">{userData.birthDate}</div>
            </div>
          </Card>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" onClick={onClose}>
            Edit
          </Button>
          <Button onClick={onClose} className="bg-purple-700">
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
