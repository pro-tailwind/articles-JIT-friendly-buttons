import { Button } from '../components/button'

export default function Homepage() {
  return (
    <div className="mx-auto mt-20 max-w-4xl px-8">
      <h1 className="text-2xl font-medium">Just-in-Time-friendly style variants for Tailwind CSS components</h1>

      {/* Small buttons */}
      <div className="mt-12 space-y-6">
        <div className="flex gap-4">
          <Button size="small">Primary button</Button>
          <Button size="small" variant="secondary">
            Secondary button
          </Button>
          <Button size="small" variant="danger">
            Danger button!
          </Button>
          <Button size="small" variant="link">
            Link button
          </Button>
        </div>
        {/* Medium buttons */}
        <div className="flex gap-4">
          <Button>Primary button</Button>
          <Button variant="secondary">Secondary button</Button>
          <Button variant="danger">Danger button!</Button>
          <Button variant="link">Link button</Button>
        </div>
        {/* Large buttons */}
        <div className="flex gap-4">
          <Button size="large">Primary button</Button>
          <Button size="large" variant="secondary">
            Secondary button
          </Button>
          <Button size="large" variant="danger">
            Danger button!
          </Button>
          <Button size="large" variant="link">
            Link button
          </Button>
        </div>
      </div>
    </div>
  )
}
