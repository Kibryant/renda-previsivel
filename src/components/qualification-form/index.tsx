"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X } from 'lucide-react'

export default function QualificationForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    wantsToCreateProduct: "",
    currentStage: "",
    name: "",
    email: "",
    whatsapp: "",
    instagram: "",
    monthlyRevenue: ""
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    // Verificar se é a primeira visita
    const hasVisited = localStorage.getItem("hasVisitedRendaPrevisivel")
    
    if (!hasVisited) {
      // Se for a primeira visita, mostrar o formulário após um pequeno delay
      const timer = setTimeout(() => {
        setIsOpen(true)
        // Desabilitar o scroll da página quando o modal estiver aberto
        document.body.style.overflow = "hidden"
      }, 1000)
      
      return () => clearTimeout(timer)
    }
  }, [])

  const validateStep = () => {
    const newErrors: Record<string, string> = {}
    
    if (currentStep === 1) {
      if (!formData.wantsToCreateProduct) {
        newErrors.wantsToCreateProduct = "Por favor, selecione uma opção"
      }
    } else if (currentStep === 2) {
      if (!formData.currentStage) {
        newErrors.currentStage = "Por favor, selecione uma opção"
      }
    } else if (currentStep === 3) {
      if (!formData.name.trim()) {
        newErrors.name = "Por favor, digite seu nome"
      }
    } else if (currentStep === 4) {
      if (!formData.email.trim()) {
        newErrors.email = "Por favor, digite seu e-mail"
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Por favor, digite um e-mail válido"
      }
    } else if (currentStep === 5) {
      if (!formData.whatsapp.trim()) {
        newErrors.whatsapp = "Por favor, digite seu WhatsApp"
      }
    } else if (currentStep === 6) {
      if (!formData.instagram.trim()) {
        newErrors.instagram = "Por favor, digite seu Instagram"
      }
    } else if (currentStep === 7) {
      if (!formData.monthlyRevenue) {
        newErrors.monthlyRevenue = "Por favor, selecione uma opção"
      }
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNextStep = () => {
    if (validateStep()) {
      if (currentStep < 7) {
        setCurrentStep(currentStep + 1)
      } else {
        handleSubmit()
      }
    }
  }

  const handleSubmit = () => {
    console.log("Dados do formulário:", formData)
    
    localStorage.setItem("hasVisitedRendaPrevisivel", "true")
    
    setIsOpen(false)
    
    document.body.style.overflow = "auto"
  }

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    })
    
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: ""
      })
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative overflow-hidden">
        <div className="absolute top-2 right-2">
          <button 
          type="button"
            onClick={() => {
              localStorage.setItem("hasVisitedRendaPrevisivel", "true")
              setIsOpen(false)
              document.body.style.overflow = "auto"
            }}
            className="text-gray-500 hover:text-gray-700 p-1"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="bg-amber-500 p-4 text-center">
          <h2 className="text-xl font-bold text-white">Qualificação para o Método Renda Previsível</h2>
          <p className="text-sm text-white/90">Responda algumas perguntas para personalizar sua experiência</p>
        </div>
        
        <div className="p-6">
          <div className="mb-4 flex justify-between">
            {Array.from({ length: 7 }).map((_, index) => (
              <div 
                key={`step-${index + 1}`}
                className={`w-8 h-2 rounded-full ${
                  currentStep > index ? "bg-amber-500" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
          
          {currentStep === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Você está aplicando pra nossa mentoria porque deseja criar e/ou vender seu produto digital?
              </h3>
              <RadioGroup
                value={formData.wantsToCreateProduct}
                onValueChange={(value) => handleChange("wantsToCreateProduct", value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sim" id="sim" />
                  <Label htmlFor="sim">Sim</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="nao" id="nao" />
                  <Label htmlFor="nao">Não</Label>
                </div>
              </RadioGroup>
              {errors.wantsToCreateProduct && (
                <p className="text-red-500 text-sm">{errors.wantsToCreateProduct}</p>
              )}
            </div>
          )}
          
          {currentStep === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Qual é o seu momento atual?</h3>
              <RadioGroup
                value={formData.currentStage}
                onValueChange={(value) => handleChange("currentStage", value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="zero" id="zero" />
                  <Label htmlFor="zero">Quero começar do ZERO. Ainda não tenho um produto digital</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="existing" id="existing" />
                  <Label htmlFor="existing">Já tenho um produto digital. Quero vender mais e melhor</Label>
                </div>
              </RadioGroup>
              {errors.currentStage && (
                <p className="text-red-500 text-sm">{errors.currentStage}</p>
              )}
            </div>
          )}
          
          {currentStep === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Digite seu nome</h3>
              <Input
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Seu nome completo"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
          )}
          
          {currentStep === 4 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Qual o seu e-mail principal?</h3>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="seu.email@exemplo.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
          )}
          
          {currentStep === 5 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Digite seu telefone WhatsApp</h3>
              <Input
                type="tel"
                value={formData.whatsapp}
                onChange={(e) => handleChange("whatsapp", e.target.value)}
                placeholder="(00) 00000-0000"
              />
              {errors.whatsapp && (
                <p className="text-red-500 text-sm">{errors.whatsapp}</p>
              )}
            </div>
          )}
          
          {currentStep === 6 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Digite seu @ do Instagram</h3>
              <div className="flex items-center">
                <span className="bg-gray-100 p-2 rounded-l-md border border-r-0">@</span>
                <Input
                  value={formData.instagram}
                  onChange={(e) => handleChange("instagram", e.target.value)}
                  placeholder="seu.perfil"
                  className="rounded-l-none"
                />
              </div>
              {errors.instagram && (
                <p className="text-red-500 text-sm">{errors.instagram}</p>
              )}
            </div>
          )}
          
          {currentStep === 7 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Selecione sua média de faturamento mensal</h3>
              <Select
                value={formData.monthlyRevenue}
                onValueChange={(value) => handleChange("monthlyRevenue", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma opção" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ate1500">Até R$1.500 por mês</SelectItem>
                  <SelectItem value="1500a3000">Entre R$1.500 a R$3.000 por mês</SelectItem>
                  <SelectItem value="4000a6000">Entre R$4.000 a R$6.000 por mês</SelectItem>
                  <SelectItem value="7000a10000">Entre R$7.000 a R$10.000 por mês</SelectItem>
                  <SelectItem value="11000a15000">Entre R$11.000 a R$15.000 por mês</SelectItem>
                  <SelectItem value="16000a25000">Entre R$16.000 a R$25.000 por mês</SelectItem>
                  <SelectItem value="acima25000">Acima de R$25.000 por mês</SelectItem>
                </SelectContent>
              </Select>
              {errors.monthlyRevenue && (
                <p className="text-red-500 text-sm">{errors.monthlyRevenue}</p>
              )}
            </div>
          )}
          
          <div className="mt-6">
            <Button 
              onClick={handleNextStep}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white"
            >
              {currentStep < 7 ? "Próximo" : "Enviar"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
