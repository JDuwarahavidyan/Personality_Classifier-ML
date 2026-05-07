import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn } from '@/lib/utils'
import type { SliderFieldConfig } from '@/data/fieldConfig'
import {
  Moon, Sun, Users, Share2, PartyPopper,
} from 'lucide-react'

const ICONS: Record<string, React.ElementType> = {
  Moon, Sun, Users, Share2, PartyPopper,
}

interface SliderFieldProps {
  config: SliderFieldConfig
  value: number
  onChange: (value: number) => void
}

export function SliderField({ config, value, onChange }: SliderFieldProps) {
  const Icon = ICONS[config.icon] ?? Moon
  const percent = ((value - config.min) / (config.max - config.min)) * 100

  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/30 hover:bg-white/8">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/15 text-purple-400">
            <Icon className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-200">{config.label}</p>
            <p className="text-xs text-slate-500">{config.description}</p>
          </div>
        </div>

        {/* Live value */}
        <div className="flex shrink-0 flex-col items-end">
          <span className="text-2xl font-bold tabular-nums text-purple-300">{value}</span>
          <span className="text-xs text-slate-500">{config.unit}</span>
        </div>
      </div>

      {/* Slider */}
      <SliderPrimitive.Root
        className="relative flex w-full touch-none select-none items-center"
        min={config.min}
        max={config.max}
        step={config.step}
        value={[value]}
        onValueChange={([v]) => onChange(v)}
      >
        <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-white/10">
          <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-purple-500 to-violet-500" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          className={cn(
            'block h-4 w-4 rounded-full border-2 border-purple-400 bg-slate-900 shadow-lg',
            'ring-offset-slate-900 transition-all',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2',
            'hover:scale-125 hover:border-purple-300',
          )}
        />
      </SliderPrimitive.Root>

      {/* Min / Max labels */}
      <div className="mt-1.5 flex justify-between text-xs text-slate-600">
        <span>{config.min}</span>
        <div
          className="h-1 rounded-full bg-purple-500/40 transition-all duration-300"
          style={{ width: `${percent}%`, maxWidth: '60%' }}
        />
        <span>{config.max}</span>
      </div>
    </div>
  )
}
