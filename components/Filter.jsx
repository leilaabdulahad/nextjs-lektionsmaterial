import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Filter as FilterIcon } from "lucide-react";

const Filter = ({ subjects, grades, onFilterChange }) => {
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedGrade, setSelectedGrade] = useState('all');

  const handleSubjectChange = (value) => {
    setSelectedSubject(value);
    onFilterChange(value === 'all' ? '' : value, selectedGrade === 'all' ? '' : selectedGrade);
  };

  const handleGradeChange = (value) => {
    setSelectedGrade(value);
    onFilterChange(selectedSubject === 'all' ? '' : selectedSubject, value === 'all' ? '' : value);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-center space-x-2">
          <FilterIcon className="w-5 h-5 text-blue-500" />
          <CardTitle className="text-xl font-semibold text-gray-800">
            Filtrera på ämne och skolform
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center p-4">
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
      </CardContent>
    </Card>
  );
};

export default Filter;