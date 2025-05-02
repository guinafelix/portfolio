import { useState } from 'react';
import Loading from '../loading/loading';
import './contact.css'

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedback(null);
    setLoading(true)

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data
    });

    if (res.ok) {
      setFeedback('Mensagem enviada com sucesso!');
      form.reset();
    } else {
      setFeedback('Erro ao enviar a mensagem. Tente novamente.');
    }

    setLoading(false);
  };

  return (
    <section className='contact-section' id='contact-section'>
      {loading && <Loading />}
      <div className='contact-container'>
        <h2 className='projects-header'>Contato</h2>
        <span className='projects-span'>
          <p>
            Sinta-se à vontade para entrar em contato comigo através do formulário abaixo e responderei 
            o mais rápido possível.
          </p>
        </span>
        <div className='contact-form-container'>
          <form onSubmit={handleSubmit} method='post' className='contact-form'>
            <input type="hidden" name="access_key" value="c0ce382e-0533-4663-97ec-dcb5149445eb"/>
            <div className='form-field'>
              <label htmlFor="name" className='contact-form-label'>Nome</label>
              <input type="text" name='name' className='contact-form-input' id='name' placeholder='Digite o Seu Nome'/>
            </div>
            <div className='form-field'>
              <label htmlFor="email" className='contact-form-label'>Email</label>
              <input type="email" name="email" id='email' className='contact-form-input' placeholder='Digite o Seu Email'/>
            </div>
            <div className='form-field'>
              <label htmlFor="message" className='contact-form-label'>Mensagem</label>
              <textarea required className='contact-form-input'
                cols={30} rows={10} id='message' name='message' placeholder='Digite a Sua Mensagem'/>
            </div>
            <div className='form-actions'>
              <button type='submit' className='button submit-button'>Enviar</button>
            </div>
          </form>
          {feedback && <div className="feedback-message">{feedback}</div>}
        </div>
      </div>
    </section>
  );
}
