import React, { useState } from "react";
import Footer from "./Footer";

const ConsultingForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    tipoProyecto: "",
    industria: "",
    servicios: [] as string[],
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      servicios: checked
        ? [...prev.servicios, value]
        : prev.servicios.filter((s) => s !== value),
    }));
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9+\s()-]{7,15}$/;

    if (!formData.nombre || !formData.email) {
      alert("Por favor, complete los campos obligatorios: Nombre y Email");
      return false;
    }

    if (!emailRegex.test(formData.email)) {
      alert("Ingrese un correo electrónico válido");
      return false;
    }

    if (formData.telefono && !phoneRegex.test(formData.telefono)) {
      alert("Ingrese un teléfono válido");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("https://formspree.io/f/mnqwjrdy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: formData.nombre,
          empresa: formData.empresa,
          email: formData.email,
          telefono: formData.telefono,
          tipoProyecto: formData.tipoProyecto,
          industria: formData.industria,
          servicios: formData.servicios.join(", "),
          mensaje: formData.mensaje,
          _replyto: formData.email,
          _subject: "Nuevo formulario de consultoría",
          _cc: "ventas@purcellsrl.com",
        }),
      });

      if (response.ok) {
        alert("Formulario enviado con éxito ✅");
        setFormData({
          nombre: "",
          empresa: "",
          email: "",
          telefono: "",
          tipoProyecto: "",
          industria: "",
          servicios: [],
          mensaje: "",
        });
      } else {
        alert("Error al enviar el formulario ❌");
      }
    } catch (err) {
      alert("Error al enviar el formulario ❌");
      console.error(err);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl mt-10 mx-auto bg-neutral-900 text-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-4">
          Solicitud de Consultoría Técnica
        </h2>

        <p className="text-gray-300 text-center mb-6">
          Complete el formulario con los detalles de su proyecto para recibir asesoría personalizada.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo *"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="text"
            name="empresa"
            placeholder="Empresa"
            value={formData.empresa}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico *"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="text"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <select
            name="tipoProyecto"
            value={formData.tipoProyecto}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Tipo de proyecto</option>
            <option value="automatizacion">Automatización</option>
            <option value="robotica">Robótica</option>
            <option value="vision">Sistemas de Visión</option>
            <option value="integracion">Integración / PLC / HMI</option>
            <option value="plc">Programación PLC</option>
            <option value="hmi">Interfaces HMI</option>
            <option value="otros">Otros</option>
          </select>

          <select
            name="industria"
            value={formData.industria}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Industria</option>
            <option value="alimentaria">Alimentaria</option>
            <option value="farmaceutica">Farmacéutica</option>
            <option value="electronica">Electrónica</option>
            <option value="logistica">Logística</option>
            <option value="energia">Energía</option>
            <option value="manufactura">Manufactura</option>
            <option value="otros">Otros</option>
          </select>
        </div>

        <fieldset className="border border-neutral-700 rounded-md p-4">
          <legend className="text-orange-400 font-semibold">Servicios requeridos</legend>
          <div className="flex flex-wrap gap-4 mt-2">
            {["PLC", "SCADA", "HMI", "Robótica", "Sistemas de Visión", "Integración"].map((servicio) => (
              <label key={servicio} className="flex items-center gap-2 min-w-0">
                <input
                  type="checkbox"
                  name="servicios"
                  value={servicio}
                  onChange={handleCheckboxChange}
                  className="accent-orange-500"
                />
                <span className="break-words">{servicio}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <textarea
          name="mensaje"
          placeholder="Detalles adicionales del proyecto"
          value={formData.mensaje}
          onChange={handleChange}
          rows={5}
          className="w-full p-3 rounded-md bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-orange-700 py-3 rounded-md font-semibold hover:from-orange-600 hover:to-orange-800 transition-all"
        >
          Enviar Solicitud
        </button>
      </form>

    
    </>
  );
};

export default ConsultingForm;