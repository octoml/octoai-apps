import '@/styles/main.css';
import { loadingSpinner } from './components/loadingSpinner';
import { alert } from './components/alert';

document.querySelector<HTMLDivElement>('#generate-image')!.innerHTML = `
<div class="interactive">
  <div class="prompt">
    <label>
      <p>Enter prompt</p>
      <input type="text" placeholder='a llama in a superhero costume' />
    </label>
    <button>Generate</button>
  </div>

  <div class="result">
    ${loadingSpinner}
    <img src="/images/llama-placeholder.jpg" alt="watercolor painting of llama in a superhero costume" />
  </div>
  ${alert}
</div>
`;
