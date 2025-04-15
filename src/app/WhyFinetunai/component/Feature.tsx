'use client'
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Zap, Shield, Repeat, Workflow, Sliders, Database } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyFineTunAI() {
  const benefits = [
    {
      title: "No-Code, Fully Visual",
      description: "Build, train, and deploy models without writing a line of code. Our intuitive interface lets you upload data, configure settings, and deploy models with simple clicks and visual tools.",
      icon: Workflow,
      details: [
        "Visual Workflow Builder for connecting models to apps",
        "Intuitive Model Training Interface",
        "Click-to-deploy functionality",
        "User-friendly data management"
      ]
    },
    {
      title: "Enterprise-Ready",
      description: "Designed for startups and SMEs, with support for secure APIs, compliance, model versioning, and private hosting options to meet your security requirements.",
      icon: Shield,
      details: [
        "Secure environment for sensitive data",
        "Model versioning and historical tracking",
        "Compliance with industry standards",
        "Private hosting options for enterprise clients"
      ]
    },
    {
      title: "All-in-One Platform",
      description: "From data ingestion to deployment, we handle the full fine-tuning lifecycle in one cohesive platform without the need for multiple tools or services.",
      icon: Repeat,
      details: [
        "End-to-end workflow from upload to deployment",
        "Built-in data preprocessing capabilities",
        "Integrated deployment and hosting",
        "Unified dashboard for all AI operations"
      ]
    },
    {
      title: "Flexible & Scalable",
      description: "Use our preloaded open-source models like LLaMA, Mistral, and Falcon, or bring your own foundation model via API key for maximum flexibility.",
      icon: Sliders,
      details: [
        "Support for multiple open-source LLMs",
        "BYOM (Bring Your Own Model) capability",
        "Scalable infrastructure that grows with your needs",
        "Adaptable to various use cases and domains"
      ]
    },
    {
      title: "Advanced Techniques, Simplified",
      description: "Access cutting-edge AI methods including full fine-tuning, parameter-efficient fine-tuning, transfer learning, RAG (Retrieval-Augmented Generation), and more.",
      icon: Zap,
      details: [
        "One-click RAG implementation with vector search",
        "Parameter-efficient fine-tuning options",
        "Multiple training optimization techniques",
        "RLHF and instruction tuning capabilities"
      ]
    },
    {
      title: "Cost-Effective Solution",
      description: "Reduce AI implementation costs by up to 70% compared to custom development teams while still getting enterprise-grade capabilities and support.",
      icon: Database,
      details: [
        "No infrastructure management costs",
        "Reduced development time and resources",
        "Predictable pricing models",
        "Eliminate need for specialized ML engineers"
      ]
    }
  ];

  const workflowSteps = [
    {
      number: 1,
      title: "Connect or Upload Your Dataset",
      description: "Upload your data in any format—PDFs, CSVs, Notion exports, URLs, and more. We support full document management with versioning and structure preservation."
    },
    {
      number: 2,
      title: "Select Your Model",
      description: "Choose from a variety of powerful open-source foundation models, or plug in your own model via API key."
    },
    {
      number: 3,
      title: "Tune Your Settings",
      description: "Adjust training parameters with ease through our intuitive Model Training Interface, or go with our recommended defaults. We support full fine-tuning, few-shot learning, instruction tuning, RLHF, and more."
    },
    {
      number: 4,
      title: "Train Your Model",
      description: "With just one click, launch the training process. FineTun AI handles everything—data preprocessing, training orchestration, and optimization—behind the scenes."
    },
    {
      number: 5,
      title: "Deploy Instantly",
      description: "After training, deploy your model directly via API or integrate it into your workflow. Our Visual Workflow Builder makes it easy to connect your model to any app or service."
    }
  ];

  const supportedDataFormats = [
    { category: "Documents", formats: ["PDFs", "DOCX", "Plain text files"] },
    { category: "Spreadsheets", formats: ["CSV", "Excel"] },
    { category: "Structured Data", formats: ["JSON", "XML"] },
    { category: "Web Content", formats: ["URLs", "Notion exports"] },
    { category: "Databases", formats: ["PostgreSQL", "MySQL", "MongoDB", "Local-hosted databases"] }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100,
        duration: 0.5
      }
    }
  };
  
  const stepLineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animation for workflow step line
    if (stepLineRef.current){
      const currentRef = stepLineRef.current; // Store ref value in a variable
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            currentRef.style.height = "100%";
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(currentRef);
      
      return () => {
        if (currentRef) { // Use stored variable in cleanup
          observer.unobserve(currentRef);
        }
      };
    }
  }, []);

  return (
    <section id="why-finetun" className="bg-gradient-to-b mt-10 from-gray-900 to-indigo-950 py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Floating tech elements decoration */}
        <div className="absolute top-10 right-0 opacity-10 pointer-events-none">
          <motion.div
            className="w-64 h-64 rounded-full bg-indigo-500/30 blur-3xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </div>
        <div className="absolute bottom-40 left-0 opacity-10 pointer-events-none">
          <motion.div
            className="w-48 h-48 rounded-full bg-purple-500/30 blur-3xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <motion.div 
            className="inline-block px-3 py-1 bg-indigo-900/50 rounded-full text-indigo-300 text-xs font-medium tracking-wider mb-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            SIMPLIFIED AI DEVELOPMENT
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Choose Finetun AI?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Training and deploying custom AI models is often a technical, costly, and infrastructure-heavy
            process. At FineTun AI, we&apos;re changing that.
          </p>
        </motion.div>

        {/* How it Works Section */}
        <motion.div 
          className="mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <motion.div 
            className="text-center mb-10"
            variants={fadeInUp}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">How FineTun AI Works</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              FineTun AI simplifies the complexity of fine-tuning large language models by offering a
              seamless no-code platform that lets anyone—from technical teams to non-technical
              operators—train and deploy custom AI models in minutes.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line with animation */}
            <div 
              ref={stepLineRef}
              className="absolute left-1/2 top-0 bottom-0 w-1 bg-indigo-900/70 hidden md:block transform -translate-x-1/2 transition-all duration-1500" 
              style={{ height: "0%" }}
            ></div>
            
            {/* Workflow Steps */}
            <motion.div 
              className="space-y-8 md:space-y-8 relative"
              variants={staggerContainer}
            >
              {workflowSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariant}
                  className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Step Number */}
                  <motion.div 
                    className="relative z-10 flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-900/50">
                      {step.number}
                    </div>
                  </motion.div>
                  
                  {/* Step Content */}
                  <motion.div 
                    className={`flex-1 bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : ''}`}
                    whileHover={{ 
                      boxShadow: "0 0 20px rgba(99, 102, 241, 0.2)",
                      borderColor: "rgba(129, 140, 248, 0.5)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-300">{step.description}</p>
                  </motion.div>
                  
                  {/* Empty div for alignment */}
                  <div className="hidden md:block flex-1"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
        
        {/* Benefits Grid */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <motion.div 
            className="text-center mb-10"
            variants={fadeInUp}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Key Benefits</h3>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariant}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 10px 20px rgba(79, 70, 229, 0.2)",
                  transition: { duration: 0.3 }
                }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 transition-all duration-300"
              >
                <div className="flex items-start mb-4">
                  <motion.div 
                    className="mr-3 mt-1 p-2 bg-indigo-900/50 rounded-lg"
                    whileHover={{ rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <benefit.icon className="text-indigo-400 w-5 h-5" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300 mb-4">{benefit.description}</p>
                    
                    <ul className="space-y-2">
                      {benefit.details.map((detail, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle2 className="text-indigo-400 w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Supported Data Formats */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <motion.div 
            className="text-center mb-10"
            variants={fadeInUp}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Supported Data Formats</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              FineTun AI supports a wide range of data formats to ensure flexibility and ease of use:
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
            variants={staggerContainer}
          >
            {supportedDataFormats.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariant}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(30, 41, 59, 0.8)",
                  transition: { duration: 0.2 }
                }}
                className="bg-gray-800/40 border border-gray-700/40 rounded-lg p-4 text-center transition-all"
              >
                <motion.h4 
                  className="text-indigo-300 font-semibold mb-3"
                  whileHover={{ color: "#a5b4fc" }}
                >
                  {item.category}
                </motion.h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  {item.formats.map((format, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {format}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Target Audience */}
        <motion.div 
          className="mb-16 bg-indigo-900/30 border border-indigo-800/40 rounded-xl p-6 md:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Who is FineTun AI for?</h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
          >
            {[
              {
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                title: "Startups and SMEs",
                description: "Who want tailored AI without the complexity or need for large development teams."
              },
              {
                icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
                title: "Product Teams",
                description: "Needing fast deployment of domain-specific LLMs to enhance their applications."
              },
              {
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
                title: "Researchers",
                description: "And developers exploring new applications for AI without infrastructure complexity."
              },
              {
                icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                title: "Non-Technical Users",
                description: "Looking for a user-friendly way to leverage AI technology without coding experience."
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-start"
                variants={itemVariant}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="mr-4 p-3 bg-indigo-800/40 rounded-lg"
                  whileHover={{ 
                    rotate: 10,
                    backgroundColor: "rgba(79, 70, 229, 0.4)" 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <svg className="w-6 h-6 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </motion.div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">{item.title}</h4>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Call To Action */}
        <motion.div 
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.div 
            className="inline-flex flex-col sm:flex-row gap-4 justify-center"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Link href="/AIStudio">
              <motion.button 
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-all duration-200 shadow-md hover:shadow-xl flex items-center justify-center"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#4338ca",
                  boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Request a Demo
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight className="ml-2 w-4 h-4" />
                </motion.span>
              </motion.button>
            </Link>
            <Link href="/AIStudio">
              <motion.button 
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-xl transition-all border border-gray-700 duration-200"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#374151",
                  borderColor: "#6366f1"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}