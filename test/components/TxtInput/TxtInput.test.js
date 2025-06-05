import { render, screen, fireEvent } from '@testing-library/react-native';
import TxtInput from '@Components/TxtInput/TxtInput';

describe('Prueba del componente TxtInput', () => {

  let testID = "txtTextInput"
  let initialText = "Titulo"
  let functionCompleted = 1
  const handleSaveClickMock = jest.fn();

  beforeEach(() => {
    render(
      <TxtInput onChangeTxt={handleSaveClickMock} title={initialText} />
    );
  })

  it('Validacion del componente con parametros iniciales', async () => {
    let result = (await screen.findByTestId(testID)).props
    expect(result.children).toBe(initialText)

    fireEvent.press(screen.getByText(initialText));
    expect(handleSaveClickMock).toHaveBeenCalledTimes(functionCompleted);
  });

  it('Muestra el placeholder', () => {
    const placeholder = "Correo electrónico";
    render(<TxtInput placeholder={placeholder} onChangeTxt={jest.fn()} />);
    expect(screen.getByPlaceholderText(placeholder)).toBeTruthy();
  });

  it('Valida integridad de cambios en el componente', () => {
    expect(screen).toMatchSnapshot();
  });
});