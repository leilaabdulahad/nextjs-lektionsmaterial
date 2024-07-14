import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export const PdfPicker = ({ pdfSrc, setSelectedPdf, setPdfSrc }) => {
  const setPdf = (e) => {
    if (!e.target.files || !e.target.files[0]) {
      return
    }

    const reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload = (x) => {
      setPdfSrc(x.target.result)
    }
    setSelectedPdf(e.target.files[0])
  }

  return (
    <>
      {pdfSrc ? (
        <div className="w-fit mx-auto">
          <Button className="mt-4" size="sm" asChild>
            <label htmlFor="pdf">Change PDF</label>
          </Button>
        </div>
      ) : (
        <div className="flex flex-col justify-center border-2 border-dashed rounded hover:bg-slate-50/10 cursor-pointer items-center">
          <label htmlFor="pdf">
            <FileText className="size-20 text-muted-foreground" />
            <p className="ml-2">Add PDF</p>
          </label>
        </div>
      )}
      <input
        type="file"
        id="pdf"
        className="hidden"
        accept="application/pdf"
        onChange={setPdf}
      />
    </>
  )
}
