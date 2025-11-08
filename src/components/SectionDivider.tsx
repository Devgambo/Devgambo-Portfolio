import DarkVeil from '@/components/ui/DarkVeil';

export default function SectionDivider() {
  return (
    <div className='mt-2' style={{ width: '100%', height: '300px', position: 'absolute' }}>
      <DarkVeil />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '120px',
          background: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
          backdropFilter: '',
          WebkitBackdropFilter: 'Safari',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

