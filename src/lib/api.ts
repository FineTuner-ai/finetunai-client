export interface ContactFormData {
    name: string;
    email: string;
    message: string;
  }
  
  interface ContactResponse {
    message: string;
  }
  
  interface ContactError {
    error: string;
  }
  
  export async function submitContactForm(formData: ContactFormData): Promise<ContactResponse> {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://finetunai-server-2.onrender.com';
    const response = await fetch(`${apiUrl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
  
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error((data as ContactError).error || 'Something went wrong');
    }
  
    return data as ContactResponse;
  }