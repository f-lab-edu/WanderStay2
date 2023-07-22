import React from 'react';
import Image from 'next/image';

export default function Logo({ className }: React.ComponentProps<'div'>) {
  return (
    <div>
      <Image
        className={className}
        src={'/logo/logo.svg'}
        alt='logo'
        width={'117'}
        height={'33'}
      />
    </div>
  );
}
