
import React from "react"

interface TypewriterProps {
  options: {
    strings: string[]
    autoStart?: boolean
    loop?: boolean
    cursor?: string
    delay?: number
    deleteSpeed?: number
  }
}

class Typewriter extends React.Component<TypewriterProps> {
  private container: React.RefObject<HTMLDivElement>
  private currentText = ""
  private currentIndex = 0
  private stringIndex = 0
  private isDeleting = false
  private timeout: NodeJS.Timeout | null = null

  constructor(props: TypewriterProps) {
    super(props)
    this.container = React.createRef()
  }

  componentDidMount() {
    if (this.props.options.autoStart) {
      this.startTyping()
    }
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
  }

  startTyping = () => {
    const { strings, loop, delay = 100, deleteSpeed = 50, cursor = "|" } = this.props.options
    const currentString = strings[this.stringIndex]

    if (!this.isDeleting) {
      // Typing
      this.currentText = currentString.substring(0, this.currentIndex + 1)
      this.currentIndex++

      // If we've typed the full string
      if (this.currentIndex === currentString.length + 1) {
        // If loop is enabled, start deleting after a pause
        if (loop) {
          this.isDeleting = true
          this.timeout = setTimeout(this.startTyping, 1000) // Pause before deleting
          return
        } else if (this.stringIndex < strings.length - 1) {
          // Move to next string if not the last one
          this.isDeleting = true
          this.timeout = setTimeout(this.startTyping, 1000) // Pause before deleting
          return
        }
        // If it's the last string and loop is false, stop here
        return
      }
    } else {
      // Deleting
      this.currentText = currentString.substring(0, this.currentIndex)
      this.currentIndex--

      // If we've deleted the full string
      if (this.currentIndex === 0) {
        this.isDeleting = false
        this.stringIndex = (this.stringIndex + 1) % strings.length
      }
    }

    // Update the DOM
    if (this.container.current) {
      this.container.current.textContent = this.currentText
      if (cursor) {
        this.container.current.textContent += cursor
      }
    }

    // Schedule the next update
    const typeSpeed = this.isDeleting ? deleteSpeed : delay
    this.timeout = setTimeout(this.startTyping, typeSpeed)
  }

  render() {
    return <div ref={this.container} />
  }
}

export default Typewriter

