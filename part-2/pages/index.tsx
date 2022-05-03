import { Button } from '../components/button'

export default function Homepage() {
  return (
    <div className="mx-auto mt-20 max-w-5xl px-8">
      <h1 className="text-2xl font-medium">Just-in-Time-friendly style variants for Tailwind CSS components</h1>

      {/* Small */}
      <div className="mt-12 space-y-6">
        <div className="flex gap-4">
          <Button size="small">Primary</Button>
          <Button size="small" variant="secondary">
            Secondary
          </Button>
          <Button size="small" variant="danger">
            Danger!
          </Button>
          <Button size="small" variant="text">
            Text
          </Button>
        </div>
        {/* Medium */}
        <div className="flex gap-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger!</Button>
          <Button variant="text">Text</Button>
        </div>
        {/* Large */}
        <div className="flex gap-4">
          <Button size="large">Primary</Button>
          <Button size="large" variant="secondary">
            Secondary
          </Button>
          <Button size="large" variant="danger">
            Danger!
          </Button>
          <Button size="large" variant="text">
            Text
          </Button>
        </div>
      </div>
    </div>
  )
}
