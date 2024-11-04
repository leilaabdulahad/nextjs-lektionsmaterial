import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Filter as FilterIcon, X } from "lucide-react"

const ActiveFilterTag = ({ label, onRemove }) => (
  <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
    <span>{label}</span>
    <button
      onClick={onRemove}
      className="hover:bg-blue-100 rounded-full p-0.5 transition-colors"
      aria-label={`Remove ${label} filter`}
    >
      <X className="w-4 h-4" />
    </button>
  </div>
)

const Filter = ({ subjects, grades, onFilterChange }) => {
  const [selectedSubject, setSelectedSubject] = useState('all')
  const [selectedGrade, setSelectedGrade] = useState('all')

  const handleSubjectChange = (value) => {
    setSelectedSubject(value)
    onFilterChange(value === 'all' ? '' : value, selectedGrade === 'all' ? '' : selectedGrade)
  }

  const handleGradeChange = (value) => {
    setSelectedGrade(value)
    onFilterChange(selectedSubject === 'all' ? '' : selectedSubject, value === 'all' ? '' : value)
  }

  const handleRemoveSubject = () => {
    setSelectedSubject('all')
    onFilterChange('', selectedGrade === 'all' ? '' : selectedGrade)
  }

  const handleRemoveGrade = () => {
    setSelectedGrade('all')
    onFilterChange(selectedSubject === 'all' ? '' : selectedSubject, '')
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-center space-x-2">
          <FilterIcon className="w-5 h-5" />
          <CardTitle className="text-xl font-semibold text-gray-800">
            Filtrera på ämne och skolform
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Select value={selectedSubject} onValueChange={handleSubjectChange}>
              <SelectTrigger className="w-64 bg-white border border-gray-200 hover:border-blue-500 transition-colors">
                <SelectValue placeholder="Välj ämne" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200">
                <SelectItem value="all" className="hover:bg-blue-50">
                  Alla ämnen
                </SelectItem>
                {subjects.map((subject, index) => (
                  <SelectItem
                    key={index}
                    value={subject}
                    className="hover:bg-blue-50"
                  >
                    {subject}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedGrade} onValueChange={handleGradeChange}>
              <SelectTrigger className="w-64 bg-white border border-gray-200 hover:border-blue-500 transition-colors">
                <SelectValue placeholder="Välj årskurs" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200">
                <SelectItem value="all" className="hover:bg-blue-50">
                  Alla årskurser
                </SelectItem>
                {grades.map((grade, index) => (
                  <SelectItem
                    key={index}
                    value={grade}
                    className="hover:bg-blue-50"
                  >
                    {grade}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Active Filters */}
          {(selectedSubject !== 'all' || selectedGrade !== 'all') && (
            <div className="flex flex-wrap gap-2 justify-center">
              {selectedSubject !== 'all' && (
                <ActiveFilterTag
                  label={selectedSubject}
                  onRemove={handleRemoveSubject}
                />
              )}
              {selectedGrade !== 'all' && (
                <ActiveFilterTag
                  label={`${selectedGrade}`}
                  onRemove={handleRemoveGrade}
                />
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default Filter