import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function RecentSales() {
  return (
    <div className='space-y-8'>
      <div className='flex items-center gap-4'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/01.png' alt='Avatar' />
          <AvatarFallback>MS</AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm leading-none font-medium'>Maria Silva</p>
            <p className='text-muted-foreground text-sm'>
              1x Peixe frito
            </p>
          </div>
          <div className='font-medium'>R$ 19,00</div>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Avatar className='flex h-9 w-9 items-center justify-center space-y-0 border'>
          <AvatarImage src='/avatars/02.png' alt='Avatar' />
          <AvatarFallback>CO</AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm leading-none font-medium'>Carlos Oliveira</p>
            <p className='text-muted-foreground text-sm'>
             1x Frango assado + Baião
            </p>
          </div>
          <div className='font-medium'>R$ 29,00</div>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/03.png' alt='Avatar' />
          <AvatarFallback>JU</AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm leading-none font-medium'>Juliana</p>
            <p className='text-muted-foreground text-sm'>
              2x Espetos de calabresa
            </p>
          </div>
          <div className='font-medium'>R$ 26,00</div>
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/04.png' alt='Avatar' />
          <AvatarFallback>RM</AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm leading-none font-medium'>Rodrigo Matos</p>
            <p className='text-muted-foreground text-sm'>1x Marmita de carne</p>
          </div>
          <div className='font-medium'>R$ 13,00</div>
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/05.png' alt='Avatar' />
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm leading-none font-medium'>Alessandra Marques</p>
            <p className='text-muted-foreground text-sm'>
              1x Marmita de frango
            </p>
          </div>
          <div className='font-medium'>R$ 24,00</div>
        </div>
      </div>
    </div>
  )
}
