import { IconProduct, Instagram, Tiktok, Youtube } from '@/assets/icons/Icons';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

const PLATFORM = [
  {
    value: 'instagram',
    icon: <Instagram />,
  },
  {
    value: 'tiktok',
    icon: <Tiktok />,
  },
  {
    value: 'youtube',
    icon: <Youtube />,
  },
];

type PropsDialogAddContent = {
  open: boolean;
  onClose: VoidFunction;
};

const DialogAddContent = ({ open, onClose }: PropsDialogAddContent) => {
  return (
    <Dialog
      open={open}
      onOpenChange={(status) => {
        !status && onClose();
      }}
    >
      <DialogContent className='max-w-[830px]'>
        <DialogHeader>
          <DialogTitle>Add content</DialogTitle>
          <DialogDescription className='hidden'>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div>
          <p className='text-sm font-semibold text-black'>
            Select the platform
          </p>

          <div className='flex items-center gap-3 mt-3'>
            {PLATFORM.map((platform, key) => (
              <Button key={key} variant='outline' className=''>
                {platform.icon}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <p className='text-sm font-semibold text-black'>
            Paste the content URL
          </p>

          <Input className='rounded-sm mt-2' placeholder='Paste link here' />
        </div>

        <div>
          <p className='text-sm font-semibold text-black'>
            Products in this content
          </p>
          <Input
            className='rounded-3xl mt-2'
            placeholder='Search product by name, brand, type'
          />
        </div>

        <hr className='border-b border-gray-200' />

        <div className='bg-[#F7F7F7] w-full h-[250px] rounded-sm flex items-center justify-center'>
          <div className='flex items-center flex-col w-fit justify-center'>
            <IconProduct stroke='#9F9B9B' />
            <p className='text-sm text-[#9F9B9B]'>
              Select one or multiple products here by searching
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogAddContent;
