import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cn } from '@/lib/utils'
import type { ToggleFieldConfig } from '@/data/fieldConfig'
import { Mic, BatteryLow } from 'lucide-react'

const ICONS: Record<string, React.ElementType> = { Mic, BatteryLow }

interface ToggleFieldProps {
  config: ToggleFieldConfig
  value: boolean
  onChange: (value: boolean) => void
}

export function ToggleField({ config, value, onChange }: ToggleFieldProps) {
  const Icon = ICONS[config.icon] ?? Mic

  return (
    <div
      className={cn(
        'rounded-2xl border p-5 backdrop-blur-sm transition-all duration-300',
        value
          ? 'border-purple-500/50 bg-purple-500/10 shadow-lg shadow-purple-500/15'
          : 'border-white/10 bg-white/5 hover:border-purple-500/25 hover:bg-white/8',
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-start gap-2.5">
          <div
            className={cn(
              'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-300',
              value ? 'bg-purple-500/30 text-purple-300' : 'bg-purple-500/15 text-purple-400',
            )}
          >
            <Icon className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-200">{config.label}</p>
            <p className="text-xs text-slate-500">{config.description}</p>
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-center gap-1">
          <SwitchPrimitive.Root
            checked={value}
            onCheckedChange={onChange}
            className={cn(
              'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent',
              'transition-colors duration-300 ease-in-out',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900',
              value ? 'bg-purple-600' : 'bg-white/15',
            )}
          >
            <SwitchPrimitive.Thumb
              className={cn(
                'pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg',
                'transition-transform duration-300 ease-in-out',
                value ? 'translate-x-5' : 'translate-x-0',
              )}
            />
          </SwitchPrimitive.Root>
          <span className={cn('text-xs font-medium transition-colors duration-200', value ? 'text-purple-400' : 'text-slate-500')}>
            {value ? 'Yes' : 'No'}
          </span>
        </div>
      </div>
    </div>
  )
}
