import React, { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

interface InlineEditProps {
  value: string;
  onSave: (value: string) => Promise<void>;
  type?: string;
  placeholder?: string;
}

const InlineEdit: React.FC<InlineEditProps> = ({
  value,
  onSave,
  type = 'text',
  placeholder = 'No especificado'
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleSave = async () => {
    try {
      await onSave(editValue);
      setIsEditing(false);
    } catch (error) {
      // El error será manejado por el componente padre
      setEditValue(value); // Revertir al valor original en caso de error
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditValue(value);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (isEditing) {
    return (
      <div className="flex items-center gap-1">
        <Input
          ref={inputRef}
          type={type}
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="h-8 py-1 px-2"
        />
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={handleSave}
          >
            <Check className="h-4 w-4 text-green-600" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={handleCancel}
          >
            <X className="h-4 w-4 text-red-600" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <span
      onClick={() => setIsEditing(true)}
      className="cursor-pointer hover:bg-muted/50 rounded px-1 py-0.5 -mx-1"
    >
      {value || placeholder}
    </span>
  );
};

export default InlineEdit; 